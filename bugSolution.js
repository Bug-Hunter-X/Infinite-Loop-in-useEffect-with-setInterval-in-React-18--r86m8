```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    console.log('Effect running');
    intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```