import React from 'react';
import styles from './Posts.module.css';

const Posts = () => (
    <div className={styles.posts} data-testid="Posts">
        <div className={styles.widgetBox}>
            <input placeholder={"ЧТО У ВАС НОВОГО ..."}/>
        </div>
    </div>
);

export default Posts;
