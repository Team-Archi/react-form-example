import { useForm, FormProvider } from 'react-hook-form';

import ConfirmButton from './button/ConfirmButton';
import FieldArray from './input/FieldArray';

interface UserInfo {
  name: string;
  phone: string;
}

export interface UserInfoForm {
  users: Array<UserInfo>;
}

/* FormProvider 사용 O */
export default function FormWithProvider() {
  const methods = useForm<UserInfoForm>();

  return (
    <FormProvider {...methods}>
      <FieldArray />
      <ConfirmButton />
    </FormProvider>
  );
}
