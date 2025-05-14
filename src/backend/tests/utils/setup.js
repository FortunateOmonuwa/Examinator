// This file is used to set up the test environment
import { beforeAll, afterAll } from 'vitest';

// Global setup
beforeAll(async () => {
  console.log('Setting up test environment');
  // You can add any setup code here, like database initialization
});

afterAll(async () => {
  console.log('Tearing down test environment');
  // You can add any cleanup code here
});
