import styles from "@/styles/Input.module.css";

interface IInputProps {
  title: string;
  area?: boolean;
  type: string;
}

export default function Input(this: any, { title, area, type }: IInputProps) {
  const component = {
    text: <input type="text" className={styles.input} />,
    date: <input type="date" className={styles.input} />,
    area: <textarea cols={30} rows={10} className={styles.input}></textarea>,
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{title}</label>
      {(component as any)[`${type}`]}
    </div>
  );
}
