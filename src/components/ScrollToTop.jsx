// When user changes the route, React doesn't automatically scroll
// to the top of the page so this component will do that

// Notes: Temporary removed because react-router-dom v6 doesn't support withRouter anymore
// Fix? use functional component, useEffect and add window.eventListener to scroll to the top when the page loads?

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}
