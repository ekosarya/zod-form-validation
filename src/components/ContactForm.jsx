import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '../schemas/contactSchema';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate asynchronous API request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form submitted successfully:', data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2>Get in Touch</h2>
        <p>Have questions or want to collaborate? Fill out the form below.</p>
      </div>

      {submitSuccess && (
        <div className={styles.successAlert}>
          Thank you! Your message has been sent successfully.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name Field */}
        <div className={styles.formGroup}>
          <label htmlFor='name' className={styles.formLabel}>
            Full Name
          </label>
          <input
            id='name'
            type='text'
            {...register('name')}
            className={`${styles.formInput} ${errors.name ? styles.inputError : ''}`}
            placeholder='John Doe'
          />
          {errors.name && (
            <p className={styles.errorMessage}>{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className={styles.formGroup}>
          <label htmlFor='email' className={styles.formLabel}>
            Email Address
          </label>
          <input
            id='email'
            type='email'
            {...register('email')}
            className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
            placeholder='john@example.com'
          />
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div className={styles.formGroup}>
          <label htmlFor='phone' className={styles.formLabel}>
            Phone Number
          </label>
          <input
            id='phone'
            type='tel'
            {...register('phone')}
            className={`${styles.formInput} ${errors.phone ? styles.inputError : ''}`}
            placeholder='+628123456789'
          />
          {errors.phone && (
            <p className={styles.errorMessage}>{errors.phone.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className={styles.formGroup} style={{ marginBottom: '14px' }}>
          <label htmlFor='message' className={styles.formLabel}>
            Message
          </label>
          <textarea
            id='message'
            rows={3}
            {...register('message')}
            className={`${styles.formTextarea} ${errors.message ? styles.inputError : ''}`}
            placeholder='Tell us about your project requirements...'
          />
          {errors.message && (
            <p className={styles.errorMessage}>{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          disabled={isSubmitting}
          className={styles.formButton}>
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
