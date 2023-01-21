import React, {memo} from 'react';

type StepItemProps = {
    icon: JSX.Element;
    title: string;
    description?: string;
}

const StepItem = ({icon, title, description}: StepItemProps) => {
    return (
        <div className={"flex items-center gap-3"}>
            <div className="flex items-center justify-center rounded-full bg-primary-400/[.3] h-16 w-16 text-primary-700">
                {icon}
            </div>
            <div className="flex flex-col gap-1">
                <strong>{title}</strong>
                <span className="text-gray-600 text-sm">{description}</span>
            </div>
        </div>
    );
}

export default memo(StepItem);