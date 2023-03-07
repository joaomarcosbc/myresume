import styles from "@/styles/Resume.module.css";

interface IResumeProps {
  fullName: string;
  jobTitle?: string;
  phone?: string;
  email?: string;
}

interface IInfoProps {
  info: IResumeProps;
}

export default function Resume(props: IInfoProps) {
  return (
    <div className={styles.page}>
      <h1>{props.info.fullName}</h1>
      <h1>{props.info.jobTitle}</h1>
      <h1>{props.info.email}</h1>
      <h1>{props.info.phone}</h1>
    </div>
  );
}
