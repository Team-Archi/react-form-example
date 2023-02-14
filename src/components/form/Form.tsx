import { useForm, useFieldArray } from 'react-hook-form';

interface UserInfo {
  name: string;
  phone: string;
}

interface UserInfoForm {
  users: Array<UserInfo>;
}

/* FormProvider 사용 X */
export default function Form() {
  const { register, control, handleSubmit } = useForm<UserInfoForm>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'users',
  });

  const onSubmit = (data: UserInfoForm) => {
    console.log(data.users);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button type="button" onClick={() => append({ name: '이름', phone: '010-0000-0000' })}>
        추가
      </button>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input type="text" {...register(`users.${index}.name`)} defaultValue={field.name} />
          <input type="text" {...register(`users.${index}.phone`)} defaultValue={field.phone} />
          <button type="button" onClick={() => remove(index)}>
            ❌
          </button>
        </div>
      ))}
      <button type="submit">확인</button>
    </form>
  );
}
