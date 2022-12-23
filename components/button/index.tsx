import Link from "next/link"
import React from "react"
import styles from "./button.module.scss"

type ButtonProps = {
    children: React.ReactNode,
    link: string
}

const Button = (props: ButtonProps) => {
    return (
        <Link className={styles.btn} href={props.link} >{props.children}</Link>
    )
}

export default Button