import React from 'react'
import css from './Button.module.css';

export function Button({onShowMore}) {
  return (
    <button className={css.buttonLoadMore} type='button' onClick={onShowMore}>Load more</button>
  )
}
