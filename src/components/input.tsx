import styles from "@/styles/Input.module.css";

interface IInputProps {
  title: string;
  area?: boolean;
  type: string;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value?: string;
  name?: string;
}

export default function Input(
  this: any,
  { title, area, type, onChange, value, name }: IInputProps
) {
  const component = {
    text: (
      <input
        type="text"
        className={styles.input}
        onChange={onChange}
        value={value}
        name={name}
      />
    ),
    date: (
      <input
        type="date"
        className={styles.input}
        onChange={onChange}
        value={value}
        name={name}
      />
    ),
    area: (
      <textarea
        cols={30}
        rows={10}
        className={styles.input}
        onChange={onChange}
        value={value}
        name={name}
      ></textarea>
    ),
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{title}</label>
      {(component as any)[`${type}`]}
    </div>
  );
}
