import styles from '@/styles/Button.module.css';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
}

export default function Button({ children, ...rest }: IButtonProps) {
  return (
    <button type="submit" className={styles.button} {...rest}>
      {children}
    </button>
  );
}
