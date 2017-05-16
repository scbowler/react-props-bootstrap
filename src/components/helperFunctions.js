export function getColorClass(baseClassName = 'text', input = 'default'){
        switch(input.toLowerCase()){
            case 'blue':
            case 'primary':
                return baseClassName + '-primary';
            case 'green':
            case 'success':
                return baseClassName + '-success';
            case 'lightblue':
            case 'light-blue':
            case 'light_blue':
            case 'light blue':
            case 'info':
                return baseClassName + '-info';
            case 'yellow':
            case 'warning':
                return baseClassName + '-warning';
            case 'red':
            case 'danger':
                return baseClassName + '-danger';
            default:
                return baseClassName + '-default';
        }
    }
    