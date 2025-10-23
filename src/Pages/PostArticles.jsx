import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const PostArticles = () => {
  const { user } = useContext(AuthContext);

  const handleAddArticles = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newArticles = Object.fromEntries(formData.entries());

    // Add extra user info
    newArticles.email = user?.email || '';
    newArticles.userName = user?.displayName || '';
    newArticles.userPhotoURL = user?.photoURL ||'';

    // Get token from local storage
    const token = localStorage.getItem('access-token');

    try {
      const res = await fetch('http://localhost:5000/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newArticles),
      });

      const data = await res.json();

      if (res.ok && (data.insertedId || data.acknowledged)) {
        Swal.fire({
          icon: 'success',
          title: 'Post Articles Successfully!',
          text: 'Your article has been posted and is now visible to students.',
          confirmButtonColor: '#3085d6',
        });
        form.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: data.message || 'Failed to post article. Please try again.',
          confirmButtonColor: '#d33',
        });
      }
    } catch (error) {
      console.error('Post Articles Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: 'Could not connect to the server.',
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <div className='w-11/12 mx-auto text-center my-12'>
      <h2 className='text-4xl font-bold mb-5 '>
        <span className=''>Post</span> New Articles
      </h2>
      <p className='text-sm text-gray-500'>
        "Have something valuable to share? Post your article and let your words reach a wider audience."
      </p>
      <div>
        <form
          onSubmit={handleAddArticles}
          className='bg-base-100 py-6 px-3 mt-7 shadow border-blue-950 border-1 rounded-3xl'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            {/* Title */}
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Title</label>
              <input type='text' className='input w-full' name='title' placeholder='Title' required />
            </fieldset>

            {/* Category */}
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Category</label>
              <select name='category' className='w-full p-2 border-base-300' required>
                <option disabled value=''>
                  Select category
                </option>
                <option value='Tech'>Tech</option>
                <option value='Education'>Education</option>
                <option value='Health'>Health</option>
                <option value='Lifestyle'>Lifestyle</option>
              </select>
            </fieldset>

            {/* Content */}
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Content</label>
              <textarea
                name='content'
                className='textarea textarea-bordered w-full'
                placeholder='Write your article here...'
                required
              />
            </fieldset>

            {/* Tags */}
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Tags (comma-separated)</label>
              <input
                type='text'
                name='tags'
                className='input w-full'
                placeholder='e.g. react, tailwind, firebase'
              />
            </fieldset>

            {/* Thumbnail URL */}
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Thumbnail URL</label>
              <input
                type='text'
                name='thumbnail'
                className='input w-full'
                placeholder='https://your-image-url.com'
                required
              />
            </fieldset>

            {/* Date */}
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Date</label>
              <input
                type='date'
                name='date'
                className='input w-full'
                defaultValue={new Date().toISOString().split('T')[0]}
                required
              />
            </fieldset>

            {/* Email */}
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>Email</label>
              <input type='email' className='input w-full' value={user?.email || ''} name='email' readOnly />
            </fieldset>

            {/* User Name */}
            <fieldset className='fieldset bg-base-200 border-base-300 rounded-box border p-4'>
              <label className='label'>User Name</label>
              <input
                type='text'
                className='input w-full'
                value={user?.displayName || ''}
                name='userName'
                readOnly
              />
            </fieldset>
          </div>

          <input
            type='submit'
            className='btn bg-blue-950 text-white mt-7 w-full font-bold'
            value='Post Articles'
          />
        </form>
      </div>
    </div>
  );
};

export default PostArticles;