import '../styles/result-item.css'

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
      <div className="result-description">
        <h3>{title.length > 25 ? title.slice(0, 23) + '...' : title}</h3>
        <p>{type} | {year}</p>
      </div>
    </div>
  )
}

export default ResultItem