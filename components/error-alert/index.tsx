import { ReactNode } from "react";
import styles from "./error.module.scss"

const ErrorAlert = ({children}: {children: ReactNode}) => {
    return (
        <div className={styles.alert}>{children}</div>
    )
}

export default ErrorAlert