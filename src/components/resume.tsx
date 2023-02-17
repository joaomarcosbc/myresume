import styles from "@/styles/Resume.module.css";

interface IResumeProps {
  fullName: string;
}

export default function Resume({ fullName }: IResumeProps) {
  return (
    <div className={styles.page}>
      <h1>{fullName}</h1>
    </div>
  );
}
