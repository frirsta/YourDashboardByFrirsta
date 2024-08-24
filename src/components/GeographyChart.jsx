import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoFeatures";
import { mockGeographyData as data } from "../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const customTooltip = (node) => (
    <div
      style={{
        padding: "5px",
        color: colors.grey[100],
        background: colors.primary[500],
        borderRadius: "3px",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
      }}
    >
      <strong>{node.feature.properties.name}</strong>: {node.feature.value}
    </div>
  );
  return (
    <ResponsiveChoropleth
      data={data}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      value="value"  
      valueFormat=".2s"
      projectionType="equalEarth"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      tooltip={customTooltip}
      enableGraticule={true} 
      graticuleLineColor={colors.grey[100]}  
      graticuleLineWidth={0.5}  
      fillColor={colors.blueAccent[700]}  
      isInteractive={true}
      onMouseEnter={(feature) => {
        console.log("Mouse Enter", feature);
      }}
      onMouseLeave={(feature) => {
        console.log("Mouse Leave", feature);
      }}
      onClick={(feature) => {
        console.log("Click", feature);
      }}
      onMouseMove={(feature) => {
        console.log("Mouse Move", feature);
      }}
      colors="nivo" 
      match={(feature) => feature.properties.name}
      role="img"   
      layers={[
        'graticule', 
        'features', 
        ({ features, path }) => features?.map(feature => (
          <path
            key={feature.id}
            d={path(feature)}
            fill={colors.blueAccent[700]}
            stroke="#000"
            strokeWidth={0.5}
          />
        ))
      ]}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default GeographyChart;

