import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Resume from "@/components/resume";
import Input from "@/components/input";
import InfoBox from "@/components/infoBox";
import Button from "@/components/button";
import { useState } from "react";

export default function Home() {
  interface IState {
    [key: string]: string;
  }

  const [state, setState] = useState<IState>({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
  });

  function setStateValues(
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.box}>
        <form className={styles.info}>
          <h1>Your Resume</h1>

          <InfoBox title="Personal Details">
            <Input
              type="text"
              title="Full Name"
              onChange={(event) => setStateValues(event)}
              value={state.fullName}
              name="fullName"
            />
            <Input
              type="text"
              title="Job Title"
              onChange={(event) => setStateValues(event)}
              value={state.jobTitle}
              name="jobTitle"
            />
            <Input
              type="text"
              title="Email"
              onChange={(event) => setStateValues(event)}
              value={state.email}
              name="email"
            />
            <Input
              type="text"
              title="Phone"
              onChange={(event) => setStateValues(event)}
              value={state.phone}
              name="phone"
            />
            <Input type="text" title="Country" />
            <Input type="text" title="City" />
          </InfoBox>

          <InfoBox title="Experience" column>
            <Input type="text" title="Job Title" />
            <Input type="text" title="Company Name" />
            <Input type="area" title="Responsabilities" area />
          </InfoBox>
          <InfoBox title="Education" column>
            <Input type="text" title="Institution" />
          </InfoBox>
          <div className={styles.buttonDiv}>
            <Button style={{ alignSelf: "end" }}>Save</Button>
          </div>
        </form>
        <div className={styles.resume}>
          <Resume
            info={{
              fullName: state.fullName,
              jobTitle: state.jobTitle,
              phone: state.phone,
              email: state.email,
            }}
          />
        </div>
      </main>
    </div>
  );
}
