import styles from '@/styles/Input.module.css';

interface IInputProps {
  title: string;
  area?: boolean;
}

export default function Input({ title, area }: IInputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{title}</label>

      {area ? (
        <textarea cols={30} rows={10} className={styles.input}></textarea>
      ) : (
        <input type="text" className={styles.input} />
      )}
    </div>
  );
}
