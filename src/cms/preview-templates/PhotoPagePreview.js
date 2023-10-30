import React from 'react'
import PropTypes from 'prop-types'
import { PhotoPageTemplate } from '../../templates/photo-page'

const PhotoPagePreview = ({ entry, getAsset }) => {
  const entryPhotos = entry.getIn(['data', 'photos'])
  const photos = entryPhotos ? entryPhotos.toJS() : []

  return (
    <PhotoPageTemplate photos={photos.map(photo => ({
      image: getAsset(photo.image),
      caption: photo.caption,
    }))} />
  )
}

PhotoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PhotoPagePreview
