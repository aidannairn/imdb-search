import ResultItem from "./ResultItem"

const ResultsList = ({ results }) => {
  return (
    results.map((result, i) => (
      <ResultItem key={i} result={result} />
    ))
  )
}

export default ResultsList