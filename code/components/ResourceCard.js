import React from 'react'
import { DocumentIcon } from '@heroicons/react/solid'
import { DownloadIcon } from '@heroicons/react/outline'

const ResourceCard = () => {
    return (
        <div className='flex flex-row rounded-md bg-white border p-4'>
            <div className='flex mr-4    flex-col justify-center'>
                <DocumentIcon className='w-8 h-8 text-gray-400' />
            </div>
            <div className='flex flex-grow flex-col'>
                <div className='flex flex-row text-base'>Important Notes</div>
                <div className='flex flex-row text-sm'>2.3 MB</div>
            </div>
            <div className='flex flex-col justify-center'>
                <DownloadIcon className='w-8 h-8 text-gray-800' />
            </div>
        </div>
    )
}

export default ResourceCard