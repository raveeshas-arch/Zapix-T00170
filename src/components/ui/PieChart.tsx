import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts'; // Import echarts for type safety
import 'echarts-gl'; // This imports the 3D extension

// Define the type for your chart data
interface PieChartDataItem {
  name: string;
  value: number;
  itemStyle: {
    color: string;
  };
}

const chartData: PieChartDataItem[] = [
  { name: 'Development', value: 35, itemStyle: { color: '#00BFFF' } }, // Bright Blue
  { name: 'Public Sale', value: 20, itemStyle: { color: '#4B0082' } }, // Indigo
  { name: 'Team & Advisors', value: 15, itemStyle: { color: '#8A2BE2' } }, // Blue Violet
  { name: 'Marketing', value: 10, itemStyle: { color: '#FF00FF' } }, // Magenta
  { name: 'Reserve', value: 10, itemStyle: { color: '#FF69B4' } }, // Hot Pink
  { name: 'Community Rewards', value: 10, itemStyle: { color: '#00CED1' } }, // Dark Turquoise
];

const PieChart: React.FC = () => {
  const getOption = (): echarts.EChartsOption => {
    return {
      // Required for 3D charts in ECharts GL
      xAxis3D: {},
      yAxis3D: {},
      zAxis3D: {},
      grid3D: {
        viewControl: {
          // Adjust alpha and beta for the desired viewing angle and rotation
          alpha: 40, // Vertical angle
          beta: 0,   // Horizontal angle
          autoRotate: false, // Set to true for automatic rotation
          // Set zoom to control the size of the chart
          zoom: 1.2,
          // Distance from the camera to the center of the scene
          distance: 200,
        },
        // Optional: remove grid lines if you want a clean black background
        axisLine: {
          lineStyle: {
            color: 'transparent'
          }
        },
        axisPointer: {
          lineStyle: {
            color: 'transparent'
          }
        },
        postEffect: {
            enable: true,
            SSAO: {
                enable: true,
                intensity: 1.3
            }
        },
        light: {
            main: {
                shadow: true,
                intensity: 1.5,
                alpha: 100,
                beta: 10
            },
            ambient: {
                intensity: 0.3
            }
        }
      },
      series: [
        {
          type: 'pie3D' as any,
          name: 'Distribution',
          data: chartData.map(item => ({
            value: item.value,
            name: item.name,
            itemStyle: item.itemStyle
          })),
          label: {
            formatter: '{b}: {d}%', // Show name and percentage
            color: 'white', // Label color
            fontSize: 14,
            align: 'left',
            position: 'outer', // Position labels outside
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            rich: { // For more control over individual parts of the label (e.g., lines)
                a: { // Style for the percentage
                    color: 'white',
                    lineHeight: 22,
                    align: 'center'
                },
                b: { // Style for the name
                    color: 'white',
                    lineHeight: 33,
                    align: 'center'
                }
            }
          },
          labelLine: {
            show: true,
            length: 10,
            length2: 20, // Length of the second segment of the leader line
            lineStyle: {
                width: 1,
                color: '#AAA' // Color of the leader lines
            }
          },
          // Configuration for the 3D pie slices
          pieStatus: {
            height: 25, // Height of the 3D extrusion
            radius: 120, // Radius of the pie chart
            center: ['50%', '50%'], // Center of the pie chart
            startRatio: 0,
            endRatio: 1,
            selectedOffset: 10, // Offset for a selected slice
          },
          // Adjust shading to give a more realistic 3D look
          shading: 'realistic',
          realisticMaterial: {
              roughness: 0.6,
              metalness: 0,
              textureTiling: [1, 1]
          }
        },
      ],
      backgroundColor: '#000000', // Black background to match the image
    };
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-black p-4">
      <div className="w-full max-w-4xl h-[500px] flex items-center justify-center">
        <ReactECharts
          option={getOption()}
          style={{ height: '100%', width: '100%' }}
          className="chart-container"
        />
      </div>
    </div>
  );
};

export default PieChart;