import React, {FC} from 'react';
import styles from './Title.module.scss';
import {TitleProps} from "./TitleProps";

const Title: FC<TitleProps> = (props) => {

    const showSubtitle = () => {
        console.log(props.subTitle)

        if (props.subTitle) {
            return (<h2>props.subTitle</h2>)
        } else return null
    }

    return (
        <div className={styles.Title} data-testid="Title">
            <h1>{props.title}</h1>
            {props.subTitle ? (<h2>{props.subTitle}</h2>) : null}
        </div>)

}
export default Title;