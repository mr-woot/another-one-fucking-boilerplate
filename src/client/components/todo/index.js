import Component, { PropTypes } from 'lib/component';
import TodoHeader from './elems/header';
import TodoFooter from './elems/footer';
import TodoList from './elems/list';
import styles from './styles.css';

export default class Todo extends Component {
  /**
   * @override
   */
  render() {
    return (
      <section className={this._styles.todo}>
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </section>
    );
  }
}

/**
 * @static
 * @type {Object}
 */
Todo.propTypes = {
  title: PropTypes.string
};

/**
 * @static
 * @type {Object}
 */
Todo.defaultProps = {
  styles,
  title: 'todos'
};
