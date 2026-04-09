import { useState } from "react";
import { Skeleton } from "@mui/material";

export default function ImageWithLoader({
    src,
    alt,
    width,
    height,
    borderRadius = "10%",
    style = {},
}) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            style={{
                position: "relative",
                width,
                height,
            }}
        >
            {!loaded && (
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    animation="wave"
                    sx={{ borderRadius }}
                />
            )}

            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                onError={() => setLoaded(true)}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius,
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    ...style,
                }}
            />
        </div>
    );
}