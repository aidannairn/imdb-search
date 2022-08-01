import ResultItem from "./ResultItem"

import '../styles/results-list.css'

const ResultsList = ({ results }) => {
  return (
    <div id="results-list">
      {results.map((result, i) => (
        <ResultItem key={i} result={result} />
      ))}
    </div>
  )
}

export default ResultsList