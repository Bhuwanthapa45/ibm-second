"use client"
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const CollaborationComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  // Function called on submit
  const onSubmit = async (data) => {
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Simulate a successful submission
      console.log('Form Data:', data);

      // Display success alert
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error('Submission Error:', e);
      // Display error alert
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-900">
      <div className="w-full max-w-lg pt-[50vh]">
        <form
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          noValidate
        >
          {/* Row 1 of form */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              {...register('name', {
                required: 'Please enter your name',
                maxLength: {
                  value: 30,
                  message: 'Please use 30 characters or less',
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              {...register('email', {
                required: 'Please enter a valid email address',
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please enter a valid email address',
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* Row 2 of form */}
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              {...register('subject', {
                required: 'Please enter a subject',
                maxLength: {
                  value: 75,
                  message: 'Subject cannot exceed 75 characters',
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Subject"
            />
            {errors.subject && (
              <p className="text-red-500 text-xs italic">{errors.subject.message}</p>
            )}
          </div>
          {/* Row 3 of form */}
          <div className="mb-4">
            <textarea
              rows={3}
              name="message"
              {...register('message', {
                required: 'Please enter a message',
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs italic">Please enter a message</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                disabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={disabled}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        {alertInfo.display && (
          <div
            className={`mt-4 p-4 border rounded ${
              alertInfo.type === 'success' ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400'
            }`}
            role="alert"
          >
            {alertInfo.message}
            <button
              type="button"
              className="ml-4 text-sm font-semibold text-blue-700 hover:text-blue-900 focus:outline-none focus:underline"
              onClick={() => setAlertInfo({ display: false, message: '', type: '' })}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollaborationComponent;
