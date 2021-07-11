import React, {FC} from 'react';
import styles from './Title.module.scss';
import {TitleProps} from "./TitleProps";

const Title: FC<TitleProps> = (props) => {
    return (
        <div className={styles.Title} data-testid="Title">
            <h1>{props.title}</h1>
            {props.subTitle ? (<h2>{props.subTitle}</h2>) : null}
        </div>)

}
export default Title;
