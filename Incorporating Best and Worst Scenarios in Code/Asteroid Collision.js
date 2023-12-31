function asteroidCollision(asteroids) {
    const result = [];
  
    for (const asteroid of asteroids) {
      // Handle case when result is empty or the asteroid is moving to the right
      if (result.length === 0 || asteroid > 0) {
        result.push(asteroid);
      } else {
        // Handle collisions when asteroid is moving to the left
        while (result.length > 0 && result[result.length - 1] > 0) {
          const lastAsteroid = result.pop();
          const collisionResult = lastAsteroid + asteroid;
  
          // Check collision outcomes
          if (collisionResult < 0) {
            result.push(asteroid); // Asteroid survives collision
            break;
          } else if (collisionResult === 0) {
            // Both asteroids disintegrate in a head-on collision
            break;
          }
          // Larger asteroid survives, continue checking with next asteroid in result
        }
      }
    }
  
    return result;
  }
  
  // Example 1
  const example1Input = [5, 10, -5];
  const example1Output = asteroidCollision(example1Input);
  console.log("Example 1 Output:", example1Output);
  
  // Example 2
  const example2Input = [8, -8];
  const example2Output = asteroidCollision(example2Input);
  console.log("Example 2 Output:", example2Output);
  
  // Example 3
  const example3Input = [10, 2, -5];
  const example3Output = asteroidCollision(example3Input);
  console.log("Example 3 Output:", example3Output);
  