import React from 'react';
import { reduxForm, Field } from 'redux-form';
import CommentInput from './CommentInput';

SharePhotoComments = () => {
  return (


      <Field
        name={'email'}
        component={CommentInput}
      />

  );
}

export default reduxForm({ form: 'signIn' })(SharePhotoComments);
