type Props = {
  icon: string;
  color?: string;
  classCss?: string;
};

const Icon = ({icon, color, classCss}: Props) => {
  const cleanedIcon = icon.replace('data:image/svg+xml;utf8,', '');

  return (
    <div
      style={{fill: color}}
      className={classCss}
      dangerouslySetInnerHTML={{__html: cleanedIcon}}
    />
  );
};

export default Icon;
