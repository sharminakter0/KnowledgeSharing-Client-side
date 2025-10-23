import React, { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import axios from "axios";

const NotificationsBell = ({ userEmail }) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userEmail) return; // wait for userEmail to exist
    setLoading(true);

    const fetchNotifications = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/notifications/${userEmail}`);
        setNotifications(res.data || []);
      } catch (err) {
        console.error("❌ Failed to fetch notifications:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [userEmail]); // re-run when userEmail changes

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  if (!userEmail) {
    return (
      <div className="relative pt-1">
        <Bell className="w-5 h-5 text-gray-400" title="Login to see notifications" />
      </div>
    );
  }

  return (
    <div className="relative pt-1">
      <button onClick={() => setOpen(!open)} className="relative">
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 h-2 w-2 rounded-full"></span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg border z-50">
          {loading ? (
            <p className="p-3 text-gray-500 text-center">Loading...</p>
          ) : notifications.length === 0 ? (
            <p className="p-3 text-gray-500 text-center">No notifications</p>
          ) : (
            notifications.map((n) => (
              <div
                key={n._id}
                className={`p-2 border-b text-sm ${
                  n.isRead ? "bg-gray-50" : "bg-blue-50"
                }`}
              >
                <p>{n.message}</p>
                <span className="text-xs text-gray-500">
                  {new Date(n.timestamp).toLocaleString()}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationsBell;
