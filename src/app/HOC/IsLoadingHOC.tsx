import React, {useState} from "react";
import './isLoadingHOC.scss';
import LoadingIcons from 'react-loading-icons'

export const IsLoadingHOC = (WrappedComponent: React.FunctionComponent) => {
    function HOC(props: any) {
        const [isLoading, setIsLoading] = useState(true);

        const setLoadingState = (isComponentLoading: boolean) => {
            setIsLoading(isComponentLoading);
        };

        return (
            <>
                {isLoading && <LoadingIcons.TailSpin className={'hoc-loader-icon'} stroke={'#ff9900'}/>}
                <WrappedComponent {...props} setLoading={setLoadingState}/>
            </>
        );
    }
    return HOC;
}

export default IsLoadingHOC;
