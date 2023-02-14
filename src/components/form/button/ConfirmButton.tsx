import React from 'react';
import { useFormContext } from 'react-hook-form';

import { UserInfoForm } from '../Form';

export default function ConfirmButton() {
  const { handleSubmit } = useFormContext<UserInfoForm>();
  const onSubmit = (data: UserInfoForm) => {
    console.log(data.users);
  };

  return (
    <button type="submit" onClick={handleSubmit(onSubmit)}>
      확인
    </button>
  );
}
