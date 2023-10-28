export default function Stats({items}) {
  if(!items.length) return (
    <footer className="stats">
      <em>Start by adding some items! 🚀</em>
    </footer>
  )
  const numPacked = items.filter(item => item.packed).length;
  const calculatedPercentage = Math.round(numPacked / items.length * 100) || 0;
  return (
    <footer className="stats">
      <em>
        {calculatedPercentage === 100 ? 'You packed all the items! ✈' :
        `💼 You have ${items.length} items in your list, and you already packed ${numPacked} (${calculatedPercentage}%)`
  }
        </em>
    </footer>
  );
}