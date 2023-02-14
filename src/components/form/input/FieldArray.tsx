import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { UserInfoForm } from '../Form';

export default function FieldArray() {
  const { control, register } = useFormContext<UserInfoForm>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'users',
  });

  const onRemoveClick = (index: number) => () => remove(index);
  const onAppendClick = () => append({ name: '이름', phone: '010-0000-0000' });

  return (
    <div>
      <button type="button" onClick={onAppendClick}>
        추가
      </button>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input type="text" {...register(`users.${index}.name`)} defaultValue={field.name} />
          <input type="text" {...register(`users.${index}.phone`)} defaultValue={field.phone} />
          <button type="button" onClick={onRemoveClick(index)}>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}
