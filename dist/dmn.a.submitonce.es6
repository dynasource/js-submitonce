/**
 * SubmitOnce prevents multiple formsubmissions
 */
class SubmitOnce {

    /**
     * Sets config and click events
     * @param config
     */
    constructor(config) {
        this.config = config;
        let nodes = SubmitOnce.getNodesBySelector(this.config.selector);

        this.config.label = (this.config.label === undefined) ? 'Please wait...' : this.config.label;
        this.config.timeout = (this.config.timeout === undefined) ? 1000 : this.config.label;

        if (nodes !== false) {
            this.setEvents(nodes);
        }
    }

    /**
     * Sets click events on html nodes (submit buttons)
     * @param nodes
     */
    setEvents(nodes) {

        for (let i in nodes) {
            let node = nodes[i];
            if (typeof node !== 'object') {
                continue;
            }

            node.addEventListener('click', (event) => {
                event.preventDefault();
                return this.preventDoubleSubmission(event.toElement);
            });
        }
    }

    /**
     * Prevents double submission
     */
    preventDoubleSubmission(button) {
        let ghostButton = this.getGhostButton(button);

        SubmitOnce.showButton(ghostButton);
        SubmitOnce.hideButton(button);

        setTimeout(() => {
            SubmitOnce.hideButton(ghostButton);
            SubmitOnce.showButton(button);
        }, this.config.timeout);

        return false;
    }

    /**
     * Gets GhostButton
     * @returns {Element|*}
     */
    getGhostButton(button) {
        if (this.ghostButton === undefined) {
            this.ghostButton = document.createElement(button.tagName);
            this.ghostButton.innerHTML = this.config.label;
            this.ghostButton.setAttribute('class', button.getAttribute('class'));
            this.ghostButton.setAttribute('disabled', true);
            button.parentNode.insertBefore(this.ghostButton, button);

        }
        return this.ghostButton;
    }

    /**
     * Hides button
     * @param button
     */
    static hideButton(button) {
        button.setAttribute('style', 'display:none');
    }

    /**
     * Shows button
     * @param button
     */
    static showButton(button) {
        button.setAttribute('style', '');
    }

    /**
     * Gets html nodes by selector
     * @param selector
     */
    static getNodesBySelector(selector) {
        var nodes;
        let methods = ['getElementsByClassName', 'getElementsByTagName', 'getElementById'];

        for (let i in methods) {
            let method = methods[i];
            nodes = document[method](selector);

            if (nodes !== null) {
                if (method == 'getElementById') {
                    nodes = [nodes];
                } else if (nodes.length === 0) {
                    continue;
                }

                return nodes;
            }
        }
        return false;
    }
}

