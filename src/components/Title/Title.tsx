import React, {FC} from 'react';
import styles from './Title.module.scss';
import {TitleProps} from "./TitleProps";

const Title: FC<TitleProps> = (props) => {
    const fontStyle = {
        color: props.color ? props.color : "black"
    }
    return (
        <div className={styles.Title}
             style={fontStyle}
             data-testid="Title">
            <h1>{props.title}</h1>
            {props.subTitle ? (<h2>{props.subTitle}</h2>) : null}
        </div>)
}
export default Title;
