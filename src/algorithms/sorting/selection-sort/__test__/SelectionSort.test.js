import SelectionSort from '../SelectionSort';
import { SortTester } from '../../SortTester';
describe('SelectionSort', () => {
  it('should sort array', () => {
    /**
     * SelectionSort class
     */
    SortTester.testSort(SelectionSort);
  });
});
