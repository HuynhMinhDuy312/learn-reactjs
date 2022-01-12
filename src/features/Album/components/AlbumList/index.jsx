import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss'

AlbumList.propTypes = {

};

function AlbumList({ albumList }) {
    return (
        <ul className='album-list'>
            {albumList.map(album => (
                <li>
                    <Album album={album} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;