import React from 'react';
import css from './Searchbar.module.css';
import { TbPhotoSearch } from 'react-icons/tb'


export function Searchbar({ onSubmit }) {
  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={onSubmit}>
        <button type="submit" className={css.button}>
          <TbPhotoSearch className={css.buttonIcon}/>
          {/* <span className={css.buttonLabel}>Search</span> */}
        </button>

        <input
          name="searchQuery"
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
