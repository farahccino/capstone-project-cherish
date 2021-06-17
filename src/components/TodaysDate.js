export default function Today() {
    const localDate = formatDate(new Date())
    return <div>{localDate}</div>
    
    function formatDate(date) {
      const options = { weekday: 'long', month: 'long', day: 'numeric' }
      const formatedDate = date.toLocaleDateString('de-DE', options).toUpperCase()
  
      return formatedDate
    }
  }