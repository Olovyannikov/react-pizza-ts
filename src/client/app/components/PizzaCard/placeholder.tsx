import ContentLoader from "react-content-loader"

export const Placeholder = (): JSX.Element => {
    return (
        <ContentLoader
            speed={2}
            width={402.5}
            height={472}
            viewBox="0 0 402.5 472"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="300" rx="3" ry="3" width="395" height="24" />
            <circle cx="200" cy="139" r="140" />
            <rect x="0" y="335" rx="0" ry="0" width="396" height="85" />
            <rect x="232" y="431" rx="19" ry="19" width="160" height="36" />
            <rect x="465" y="166" rx="0" ry="0" width="87" height="48" />
            <rect x="652" y="253" rx="0" ry="0" width="98" height="52" />
            <rect x="0" y="434" rx="0" ry="0" width="124" height="35" />
        </ContentLoader>
    );
};
