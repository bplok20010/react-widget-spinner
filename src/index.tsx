import React from "react";
import classnames from "classnames";

const R = 45;
const SPINNER_TRACK = `M 50,50 m 0,-${R} a ${R},${R} 0 1 1 0,${R * 2} a ${R},${R} 0 1 1 0,-${
	R * 2
}`;

const PATH_LENGTH = 280;

const MIN_SIZE = 10;
const STROKE_WIDTH = 4;
const MIN_STROKE_WIDTH = 16;
const SIZE_LARGE = 100;

const sizeMap = {
	small: 14,
	default: 20,
	medium: 30,
	large: 40,
};

function getSize(size: keyof typeof sizeMap | number) {
	return Math.max(MIN_SIZE, sizeMap[size] || size);
}

function getViewBox(strokeWidth: number) {
	const radius = R + strokeWidth / 2;
	const viewBoxX = (50 - radius).toFixed(2);
	const viewBoxWidth = (radius * 2).toFixed(2);
	return `${viewBoxX} ${viewBoxX} ${viewBoxWidth} ${viewBoxWidth}`;
}

function clamp(val: number, min: number, max: number) {
	if (val == null) {
		return val;
	}
	if (max < min) {
		throw new Error("clamp: max cannot be less than min");
	}
	return Math.min(Math.max(val, min), max);
}

export const version = "%VERSION%";

export interface SpinnerProps extends React.HTMLAttributes<any> {
	/** 样式前缀 */
	prefixCls?: string;
	/** 组件大小 */
	size?: keyof typeof sizeMap | number;
	/** TODO: 延迟显示加载效果的时间 ms */
	delay?: number;
	/** 圈圈周长：0-1 */
	value?: number;
	/** 风格，默认：primary */
	type?: "none" | "primary" | "success" | "warning" | "danger";
	/** 边框大小 */
	strokeWidth?: number;
	/** 是否为加载中状态 */
	spinning?: boolean;
	tagName?: React.ElementType;
}

export const Spinner: React.FC<SpinnerProps> = function ({
	tagName,
	prefixCls,
	className,
	size,
	value,
	type,
	strokeWidth,
	spinning,
	...restProps
}) {
	const TagName = tagName!;
	const cls = classnames(
		prefixCls,
		{
			[`${prefixCls}-${type}`]: type && type !== "none",
			[`${prefixCls}-spinning`]: spinning,
		},
		className
	);
	size = getSize(size!);

	strokeWidth =
		strokeWidth == null
			? Math.min(MIN_STROKE_WIDTH, (STROKE_WIDTH * SIZE_LARGE) / size)
			: strokeWidth;

	const strokeOffset = PATH_LENGTH - PATH_LENGTH * (value == null ? 0.25 : clamp(value, 0, 1));

	return (
		<TagName className={cls} {...restProps}>
			<svg
				className={`${prefixCls}-animation`}
				width={size}
				height={size}
				strokeWidth={strokeWidth.toFixed(2)}
				viewBox={getViewBox(strokeWidth)}
			>
				<path className={`${prefixCls}-track`} d={SPINNER_TRACK} />
				<path
					stroke="currentColor"
					className={`${prefixCls}-head`}
					d={SPINNER_TRACK}
					pathLength={PATH_LENGTH}
					strokeDasharray={`${PATH_LENGTH} ${PATH_LENGTH}`}
					strokeDashoffset={strokeOffset}
				/>
			</svg>
		</TagName>
	);
};

Spinner.defaultProps = {
	prefixCls: "rw-spinner",
	size: "default",
	type: "primary",
	spinning: true,
	tagName: "div",
	value: 0.25,
};

Spinner.displayName = "Spinner";

export default Spinner;
