// Log number
console.log(100);

// Log string
console.log('Hello World');

// Log multiple values
console.log(20, 'Hello', true);


// Console error & warning
console.error('Alert');
console.warn('Warning');

// Log object as table
console.table({ name: 'Brad', email: 'brad@gmail.com' });

// Group console commands
console.group('simple');
console.log("x");
console.error('Alert kien');
console.warn('Warning kien');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: red';
console.log('%cHello World', styles);
