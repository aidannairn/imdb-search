const ResultItem = ({ result }) => {
  const { 
    Title: title,
    Year: year,
    Type: type,
    Poster: poster 
  } = result

  return (
    <div className="result-item">
      <div className="poster-wrapper">
        <img src={poster} alt={`${title} image.`} />
      </div>
      <div className="description">
        <h3>{title}</h3>
        <p>{type} | {year}</p>
      </div>
    </div>
  )
}

export default ResultItem