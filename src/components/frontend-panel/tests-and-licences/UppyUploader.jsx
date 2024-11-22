import Uppy from '@uppy/core';
import Dashboard from '@uppy/dashboard';

import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import '@/../public/css/global/uppyCustom.css';
import { useEffect, useRef } from 'react';

const UppyUploader = () => {

    const uppyRef = useRef(null); // Use a ref to store the Uppy instance

    useEffect(() => {
        // Initialize Uppy only once
        if (!uppyRef.current) {
            const uppy = new Uppy({
                restrictions: {
                    maxFileSize: 5500000
                    , maxNumberOfFiles: 6
                    , minNumberOfFiles: 1
                    , allowedFileTypes: ['.jpg', '.jpeg', '.png', '.pdf']
                }
            });
            uppy.use(Dashboard, {
                target: '#uppyDashboard'
                , inline: true
                , doneButtonHandler: null,
                replaceTargetContent: false,
                showProgressDetails: true,
                proudlyDisplayPoweredByUppy: false,
                note: "JPG,JPEG,PNG,PDF max 6 files at once of 5 MB each", // instructions to your users
                height: 220
                , metaFields: [{
                    id: 'name'
                    , name: 'File Name'
                    , placeholder: 'You can rename the file here'
                }]
            });
            uppyRef.current = uppy; // Store the instance in the ref
        }

        // Cleanup on unmount
        return () => {
            if (uppyRef.current) {
                uppyRef.current.destroy(); // destroy of the Uppy instance properly
                uppyRef.current = null; // Reset the ref
            }
        };
    }, []);


    return (
        <div id='uppyDashboard'></div>
    );
};

export default UppyUploader;
