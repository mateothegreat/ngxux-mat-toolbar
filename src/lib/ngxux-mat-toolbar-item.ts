/**
 *
 * Menu item shown in toolbars and menus such as the left or top of the screen.
 *
 */
export class NgxuxMatToolbarItem {
    /**
     * This is the relative path to pass to the router and navigate to when clicked.
     */
    public path: string;

    /**
     * The name of the material icon.
     */
    public icon: string;

    /**
     * Text to display for this menu item (if applicable).
     */
    public label: string;

    /**
     * If specified, will show a material tooltip on mouseover.
     */
    public tooltip: string;

    /**
     * If specified, will use this color for the icon.
     */
    public color: string;

    /**
     * If specified, will use this color for the icon when hovered.
     */
    public hoverColor: string;

    /**
     * Constructs a new MatAdminMenuItem Object while passing in optional values.
     */
    public constructor(config: {

        icon: string,
        label?: string,
        path?: string,
        tooltip?: string
        color?: string,
        hoverColor?: string,

    }) {

        this.icon = config.icon;
        this.label = config.label;

        this.path = config.path;
        this.tooltip = config.tooltip;

        this.color = config.color;
        this.hoverColor = config.hoverColor;

    }

}
