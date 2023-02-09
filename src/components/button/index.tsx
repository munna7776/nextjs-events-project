import Link from "next/link"
import React from "react"
import styles from "./button.module.scss"

type ButtonProps = {
    children: React.ReactNode;
    link?: string;
    onClick?: ()=>void
}

const Button = (props: ButtonProps) => {
    if(props.link) {
        return (
            <Link className={styles.btn} href={props.link} >{props.children}</Link>
        )
    }
    return (
        <button className={styles.btn} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button